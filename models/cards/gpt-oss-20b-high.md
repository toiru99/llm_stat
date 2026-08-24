---
type: Model
title: gpt-oss-20b (high)
creator: OpenAI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.073
output_speed_tps: 112.0
context_window: 131000
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 33.4, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 43.3, z: -0.21, r: 46.8, estimated: false }  # 코딩
  agentic: { s: 19.1, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.0, r: 34.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.8, z: -0.33, r: 45.0, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.83, r: 62.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# gpt-oss-20b (high)

OpenAI · Open · Small(21B) · 컨텍스트 131k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.06 · 출력 $0.19 · 혼합 $0.073/1M · 112.0 t/s · TTFT 1.0s · 131k ctx` · 가성비 205.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 46.8 | -0.21 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[apex-agents]] 1.0%×1.0, [[gdpval]] 3.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 34.9 | -1.0 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.0 | -0.33 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
