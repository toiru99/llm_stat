---
type: Model
title: gpt-oss-20b (high)
creator: OpenAI
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.081
output_speed_tps: 175.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.1, z: -0.44, r: 43.4, estimated: false }  # 전문 지식
  reasoning: { s: 29.5, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 41.1, z: 0.15, r: 52.2, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -1.05, r: 34.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.38, r: 44.3, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.84, r: 62.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# gpt-oss-20b (high)

OpenAI · Open · Small · 컨텍스트 131k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.07 · 출력 $0.18 · 혼합 $0.081/1M · 175.0 t/s · TTFT 0.75s · 131k ctx` · 가성비 111.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.4 | -0.44 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.2 | +0.15 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[apex-agents]] 1.0%×1.0, [[gdpval]] 0.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 34.3 | -1.05 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.3 | -0.38 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 62.7 | +0.84 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
