---
type: Model
title: gpt-oss-120b (high)
creator: OpenAI
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.177
output_speed_tps: 187.0
context_window: 131000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.5, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 38.0, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 41.6, z: 0.23, r: 53.5, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.5, r: 42.5, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 58.4, z: 0.24, r: 53.6, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.11, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# gpt-oss-120b (high)

OpenAI · Open · Medium · 컨텍스트 131k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.59 · 혼합 $0.177/1M · 187.0 t/s · TTFT 0.87s · 131k ctx` · 가성비 67.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 53.5 | +0.23 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 42.5 | -0.5 | 실측 | [[apex-agents]] 3.0%×1.0, [[gdpval]] 5.0%×1.0, [[itbench]] 6.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 13.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.6 | +0.24 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
