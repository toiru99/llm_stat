---
type: Model
title: Muse Wonder (max)
creator: Meta
license: Proprietary
intelligence_index: 43.7263377513583
price_blended_usd_1m: 2.94
output_speed_tps: 84.6796353510087
context_window: 1048576
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.0, z: 0.98, r: 64.7, estimated: false }  # 전문 지식
  reasoning: { s: 73.1, z: 1.88, r: 78.3, estimated: false }  # 추론
  coding: { s: 87.8, z: 1.58, r: 73.6, estimated: false }  # 코딩
  agentic: { s: 95.8, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Muse Wonder (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.7263377513583**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 84.6796353510087 t/s · TTFT 27.7513451985935s · 1M ctx` · 가성비 14.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.7 | +0.98 | 실측 | [[humanitys-last-exam]] 50.0927%×0.3 |
| 추론 | 78.3 | +1.88 | 실측 | [[critpt]] 28.2857%×1.0, [[humanitys-last-exam]] 50.0927%×1.0 |
| 코딩 | 73.6 | +1.58 | 실측 | [[scicode]] 60.3009%×1.0 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[gdpval]] 1770.34 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 80.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
