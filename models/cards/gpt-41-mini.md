---
type: Model
title: GPT-4.1 mini
creator: OpenAI
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 0.31
output_speed_tps: 78.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.7, z: -0.33, r: 45.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.8, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.09, r: 51.4, estimated: false }  # 코딩
  agentic: { s: 20.2, z: -0.63, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.37, r: 44.5, estimated: false }  # 신뢰성
  multimodal: { s: 63.8, z: -0.38, r: 44.4, estimated: false }  # 멀티모달
  long_context: { s: 55.3, z: 0.19, r: 52.9, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.66, r: 40.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# GPT-4.1 mini

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.31/1M · 78.0 t/s · TTFT 0.87s · 1M ctx` · 가성비 48.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.0 | -0.33 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 51.4 | +0.09 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.6 | -0.63 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 53.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 44.5 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 44.4 | -0.38 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 52.9 | +0.19 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 40.2 | -0.66 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
