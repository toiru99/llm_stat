---
type: Model
title: gpt-oss-120b (high)
creator: OpenAI
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.195
output_speed_tps: 176.0
context_window: 131000
status: current
size_class: Medium
params_b: 117
is_reasoning: true
radar:
  knowledge: { s: 44.3, z: 0.15, r: 52.2, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 54.9, z: 0.28, r: 54.1, estimated: false }  # 코딩
  agentic: { s: 27.1, z: -0.37, r: 44.4, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 61.4, z: 0.33, r: 55.0, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.06, r: 65.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# gpt-oss-120b (high)

OpenAI · Open · Medium(117B) · 컨텍스트 131k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 176.0 t/s · TTFT 0.82s · 131k ctx` · 가성비 123.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.2 | +0.15 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 54.1 | +0.28 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 44.4 | -0.37 | 실측 | [[apex-agents]] 3.0%×1.0, [[gdpval]] 15.0%×1.0, [[itbench]] 6.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 13.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.0 | +0.33 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
