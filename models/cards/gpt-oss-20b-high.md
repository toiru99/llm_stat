---
type: Model
title: gpt-oss-20b (high)
creator: OpenAI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.07
output_speed_tps: 205.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.3, z: -0.3, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.2, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 43.3, z: -0.12, r: 48.1, estimated: false }  # 코딩
  agentic: { s: 20.6, z: -0.61, r: 40.9, estimated: false }  # 에이전트
  trust: { s: 5.9, z: -1.04, r: 34.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 40.8, z: -0.23, r: 46.5, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# gpt-oss-20b (high)

OpenAI · Open · Unknown · 컨텍스트 131k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.07/1M · 205.0 t/s · TTFT 0.83s · 131k ctx` · 가성비 214.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.3 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 48.1 | -0.12 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 40.9 | -0.61 | 실측 | [[apex-agents]] 1.0%×1.0, [[gdpval]] 3.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 34.4 | -1.04 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.5 | -0.23 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
