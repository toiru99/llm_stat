---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.0622
output_speed_tps: 62.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 0.97, r: 64.5, estimated: false }  # 전문 지식
  reasoning: { s: 56.6, z: 0.88, r: 63.1, estimated: false }  # 추론
  coding: { s: 60.4, z: 0.76, r: 61.4, estimated: false }  # 코딩
  agentic: { s: 56.8, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.14, r: 32.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.71, r: 75.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.11 · 출력 $0.23 · 혼합 $0.0622/1M · 62.0 t/s · TTFT 1.32s · 1M ctx` · 가성비 385.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.5 | +0.97 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 63.1 | +0.88 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 61.4 | +0.76 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 1037.0%×1.0, [[itbench]] 32.0%×1.0, [[tau3-banking]] 31.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 32.9 | -1.14 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 75.6 | +1.71 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
