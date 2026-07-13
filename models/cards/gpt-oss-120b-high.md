---
type: Model
title: gpt-oss-120b (high)
creator: OpenAI
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.2
output_speed_tps: 322.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: 0.25, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 38.9, z: 0.29, r: 54.4, estimated: false }  # 추론
  coding: { s: 54.9, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 29.2, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: 9.4, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.1, z: 0.56, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# gpt-oss-120b (high)

OpenAI · Open · Unknown · 컨텍스트 131k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.2/1M · 322.0 t/s · TTFT 0.8s · 131k ctx` · 가성비 120.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.25 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.4 | +0.29 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[apex-agents]] 3.0%×1.0, [[gdpval]] 15.0%×1.0, [[itbench]] 6.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.3 | +0.56 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
