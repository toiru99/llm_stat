---
type: Model
title: DeepSeek V4 Flash 0731 (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0756
output_speed_tps: 147.62597642685276
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.5, z: 1.37, r: 70.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.8, z: 1.41, r: 71.1, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.08, r: 66.2, estimated: false }  # 코딩
  agentic: { s: 78.8, z: 1.19, r: 67.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 79.1, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash 0731 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# DeepSeek V4 Flash 0731 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.0756/1M · 147.62597642685276 t/s · TTFT 1.5443580016789424s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.6 | +1.37 | 실측 | [[gpqa-diamond]] 90.8080808080808%×0.4, [[humanitys-last-exam]] 38.5542168674699%×0.3 |
| 추론 | 71.1 | +1.41 | 실측 | [[critpt]] 16.5714285714286%×1.0, [[gpqa-diamond]] 90.8080808080808%×1.0, [[humanitys-last-exam]] 38.5542168674699%×1.0 |
| 코딩 | 66.2 | +1.08 | 실측 | [[scicode]] 50.3472222222222%×1.0 |
| 에이전트 | 67.8 | +1.19 | 실측 | [[gdpval]] 1436.82%×1.0, [[tau3-banking]] 39.381443298969096%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
