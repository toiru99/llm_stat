---
type: Model
title: gpt-oss-120b (high)
creator: OpenAI
license: Open
intelligence_index: 24.0
price_blended_usd_1m: None
output_speed_tps: 268.0
context_window: 131000
status: current
size_class: Medium
params_b: 117
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.9, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 54.9, z: 0.34, r: 55.1, estimated: false }  # 코딩
  agentic: { s: 28.9, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: 9.2, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.1, z: 0.52, r: 57.9, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.12, r: 66.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# gpt-oss-120b (high)

OpenAI · Open · Medium(117B) · 컨텍스트 131k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $None/1M · 268.0 t/s · TTFT 0.88s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 55.1 | +0.34 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[apex-agents]] 3.0%×1.0, [[gdpval]] 15.0%×1.0, [[itbench]] 6.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.9 | +0.52 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 66.9 | +1.12 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
