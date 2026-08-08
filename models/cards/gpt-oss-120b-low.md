---
type: Model
title: gpt-oss-120b (low)
creator: OpenAI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.1895
output_speed_tps: 220.0
context_window: 131000
status: current
size_class: Medium
params_b: 117
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.45, r: 43.2, estimated: false }  # 추론
  coding: { s: 42.5, z: -0.2, r: 47.0, estimated: false }  # 코딩
  agentic: { s: 14.7, z: -0.83, r: 37.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.4, z: 0.19, r: 52.8, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.46, r: 56.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# gpt-oss-120b (low)

OpenAI · Open · Medium(117B) · 컨텍스트 131k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.54 · 혼합 $0.1895/1M · 220.0 t/s · TTFT 0.9s · 131k ctx` · 가성비 79.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.2 | -0.45 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 47.0 | -0.2 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.5 | -0.83 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 45.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.8 | +0.19 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 56.9 | +0.46 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
