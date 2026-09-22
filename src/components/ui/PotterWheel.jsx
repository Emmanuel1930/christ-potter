import { useEffect, useRef } from "react";

/** Canvas animation of a clay vessel being thrown on a potter's wheel. */
export default function PotterWheel() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H * 0.62;
    let t = 0;
    let dir = 1;
    let rafId;

    function clayProfile(p) {
      const pts = [];
      const baseW = 70;
      const topY = H * 0.32;
      const botY = cy;
      const n = 40;
      for (let i = 0; i <= n; i++) {
        const f = i / n;
        const y = botY - f * (botY - topY) * (0.25 + 0.75 * p);
        const flatW = baseW * (1 - f * 0.15);
        const bulge = Math.sin(f * Math.PI * 1.15) * 46 * p;
        const neck = Math.pow(f, 3) * 30 * p;
        const w = flatW * (1 - p) + (baseW * 0.55 + bulge - neck) * p;
        pts.push([Math.max(w, 4), y]);
      }
      return pts;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const wheelR = 100 - t * 8;
      ctx.save();
      ctx.translate(cx, cy + 30);
      ctx.scale(1, 0.28);
      const grad = ctx.createRadialGradient(0, 0, wheelR * 0.2, 0, 0, wheelR);
      grad.addColorStop(0, "#c9bfa8");
      grad.addColorStop(1, "#a89a7c");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, wheelR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const pts = clayProfile(t);
      ctx.beginPath();
      pts.forEach((p, i) => {
        const x = cx + p[0];
        const y = p[1];
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      for (let i = pts.length - 1; i >= 0; i--) {
        ctx.lineTo(cx - pts[i][0], pts[i][1]);
      }
      ctx.closePath();
      const cgrad = ctx.createLinearGradient(cx - 90, 0, cx + 90, 0);
      cgrad.addColorStop(0, "#8a5326");
      cgrad.addColorStop(0.5, "#B5702F");
      cgrad.addColorStop(1, "#96602c");
      ctx.fillStyle = cgrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = "rgba(0,0,0,0.08)";
      for (let k = 1; k < pts.length; k += 3) {
        const p1 = pts[k];
        ctx.beginPath();
        ctx.moveTo(cx - p1[0] * 0.94, p1[1]);
        ctx.lineTo(cx + p1[0] * 0.94, p1[1]);
        ctx.stroke();
      }

      const handY = cy - 40 - t * 60;
      const handSpread = (pts[Math.floor(pts.length * 0.6)] || pts[pts.length - 1])[0] + 14;
      ctx.fillStyle = "#e7c9a8";
      [-1, 1].forEach((dirSign) => {
        ctx.beginPath();
        ctx.ellipse(cx + dirSign * handSpread, handY, 14, 30, dirSign * 0.15, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    if (reduced) {
      t = 1;
      draw();
      return;
    }

    function frame() {
      t += dir * 0.006;
      if (t >= 1) {
        t = 1;
        dir = -1;
      }
      if (t <= 0) {
        t = 0;
        dir = 1;
      }
      draw();
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="wheel-canvas"
      width="420"
      height="420"
      role="img"
      aria-label="Animation of clay being shaped on a potter's wheel"
    />
  );
}
