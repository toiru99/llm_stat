---
type: Model
title: Kimi K2.6 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.702
output_speed_tps: 32.462763038643
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 56.4, z: 0.47, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 76.1, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: 45.2, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Kimi K2.6 (non-reasoning)

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 32.462763038643 t/s · TTFT 7.41824242566666s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.47 | 실측 | [[gpqa-diamond]] 78.7879%×0.4, [[humanitys-last-exam]] 19.5551%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 78.7879%×1.0, [[humanitys-last-exam]] 19.5551%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[terminal-bench]] 37.8788%×0.5 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[tau2-bench]] 93.8596%×1.0, [[terminal-bench]] 37.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 69.6667%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 44.2857%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
