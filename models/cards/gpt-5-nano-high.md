---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.0535
output_speed_tps: 157.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.0, z: -0.29, r: 45.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.38, r: 44.2, estimated: false }  # 추론
  coding: { s: 18.2, z: -0.49, r: 42.7, estimated: false }  # 코딩
  agentic: { s: 27.8, z: -0.37, r: 44.4, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.74, r: 61.1, estimated: false }  # 신뢰성
  multimodal: { s: 63.9, z: -0.31, r: 45.3, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: 0.05, r: 50.7, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 157.0 t/s · TTFT 99.69s · 400k ctx` · 가성비 261.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.7 | -0.29 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.2 | -0.38 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 42.7 | -0.49 | 실측 | [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 44.4 | -0.37 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 61.1 | +0.74 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 45.3 | -0.31 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 50.7 | +0.05 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
