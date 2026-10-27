---
type: Model
title: DeepSeek V4 Flash 0731 (max)
creator: DeepSeek
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.0721
output_speed_tps: 145.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.5, z: 1.17, r: 67.5, estimated: false }  # 전문 지식
  reasoning: { s: 69.7, z: 1.47, r: 72.0, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.14, r: 67.1, estimated: false }  # 코딩
  agentic: { s: 76.6, z: 1.44, r: 71.7, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.96, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 81.1, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash 0731 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# DeepSeek V4 Flash 0731 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.0721/1M · 145.0 t/s · TTFT 1.41s · 1M ctx` · 가성비 471.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.5 | +1.17 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 72.0 | +1.47 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 67.1 | +1.14 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 71.7 | +1.44 | 실측 | [[gdpval]] 1433.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
