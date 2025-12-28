import React, { useEffect, useRef, useState } from 'react'

export default function RPGDialogue({
  image,
  dialogues = [],
  typingSpeed = 30,
  targetUrl,
  onFinish,
}) {
  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const [visibleText, setVisibleText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [finished, setFinished] = useState(false)

  const avatarRef = useRef(null)
  const boxRef = useRef(null)

  /* ================= Typing ================= */

  useEffect(() => {
    if (!started || finished) return

    const text = dialogues[idx] || ''
    setVisibleText('')
    setIsTyping(true)

    let i = 0
    const timer = setInterval(() => {
      i++
      setVisibleText(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timer)
        setIsTyping(false)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [idx, started, finished, dialogues, typingSpeed])

  /* ================= Handlers ================= */

  function startDialogue() {
    setStarted(true)
    setIdx(0)
  }

  function next() {
    // 若正在打字：先顯示完整當前句
    if (isTyping) {
      setVisibleText(dialogues[idx])
      setIsTyping(false)
      return
    }

    if (idx < dialogues.length - 1) {
      setIdx((v) => v + 1)
    } else {
      setFinished(true)
      onFinish?.()
    }
  }

  function prev() {
    // 若正在打字：先顯示完整當前句（與 next 的行為一致）
    if (isTyping) {
      setVisibleText(dialogues[idx])
      setIsTyping(false)
      return
    }

    if (idx > 0) {
      setIdx((v) => v - 1)
    }
  }

  function reset() {
    setStarted(false)
    setIdx(0)
    setVisibleText('')
    setFinished(false)
    setIsTyping(false)
  }

  /* ================= Layout Sync ================= */

  useEffect(() => {
    function syncHeight() {
      if (!avatarRef.current || !boxRef.current) return
      const h = avatarRef.current.getBoundingClientRect().height
      boxRef.current.style.height = `${h}px`
    }
    syncHeight()
    window.addEventListener('resize', syncHeight)
    return () => window.removeEventListener('resize', syncHeight)
  }, [])

  /* ================= Render ================= */

  return (
    <div className="rpg-wrap">
      <div className="rpg-inner">
        <img ref={avatarRef} className="rpg-avatar" src={image} alt="guide" />

        <div className="rpg-right">
          <div ref={boxRef} className="rpg-box">
            <p className="rpg-text">
              {!started ? 'Click “Talk to Me” to Start.' : visibleText}
            </p>

            {/* Floating Previous Arrow (左) */}
            {started && !finished && idx > 0 && (
              <button
                className={`rpg-prev-arrow ${!isTyping ? 'float' : ''}`}
                onClick={prev}
                aria-label="previous"
              >
                ▲
              </button>
            )}

            {/* Floating Next Arrow (右) */}
            {started && !finished && (
              <button
                className={`rpg-next-arrow ${!isTyping ? 'float' : ''}`}
                onClick={next}
                aria-label="next"
              >
                ▼
              </button>
            )}

            {/* 初始開始按鈕（只有未開始顯示） */}
            {!started && (
              <div className="rpg-controls">
                <button className="rpg-start-inline" onClick={startDialogue}>
                  Talk to Me
                </button>
              </div>
            )}

            {/* 結束後行動按鈕 */}
            {finished && (
              <div className="rpg-end-actions">
                <button className="rpg-btn" onClick={reset}>
                  Stay
                </button>
                {targetUrl && (
                  <button
                    className="rpg-btn primary"
                    onClick={() => window.open(targetUrl, '_blank')}
                  >
                    Let's go !
                  </button>
                )}
              </div>
            )}

            <div className="rpg-tail" />
          </div>
        </div>
      </div>
    </div>
  )
}
