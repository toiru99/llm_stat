---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 83.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.3, z: 1.67, r: 75.1, estimated: false }  # 전문 지식
  reasoning: { s: 85.8, z: 1.81, r: 77.1, estimated: false }  # 추론
  coding: { s: 88.0, z: 1.71, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 82.5, z: 1.66, r: 75.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.2, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 83.0 t/s · TTFT 10.34s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.1 | +1.67 | 실측 | [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 77.1 | +1.81 | 실측 | [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 75.6 | +1.71 | 실측 | [[scicode]] 58.0%×1.0, [[terminal-bench]] 62.0%×0.5 |
| 에이전트 | 75.0 | +1.66 | 실측 | [[gdpval]] 1512.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 62.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 67.9 | +1.2 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
