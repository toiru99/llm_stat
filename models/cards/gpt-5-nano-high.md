---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 0.0535
output_speed_tps: 147.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.9, z: -0.35, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.44, r: 43.5, estimated: false }  # 추론
  coding: { s: 18.2, z: -0.63, r: 40.6, estimated: false }  # 코딩
  agentic: { s: 27.8, z: -0.42, r: 43.7, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.64, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: 63.0, z: -0.42, r: 43.7, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: -0.03, r: 49.5, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.02, r: 65.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 147.0 t/s · TTFT 89.6s · 400k ctx` · 가성비 243.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 43.5 | -0.44 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 40.6 | -0.63 | 실측 | [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 43.7 | -0.42 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 59.5 | +0.64 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 43.7 | -0.42 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 49.5 | -0.03 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
