---
type: Model
title: Hermes 4 405B (Non-reasoning)
creator: Nous Research
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 1.2
output_speed_tps: 43.0
context_window: 128000
status: current
size_class: Large
params_b: 406
is_reasoning: false
radar:
  knowledge: { s: 35.9, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.78, r: 38.4, estimated: false }  # 추론
  coding: { s: 42.7, z: -0.17, r: 47.4, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.27, r: 45.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.3, z: -0.75, r: 38.7, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.85, r: 37.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Hermes 4 405B (Non-reasoning)

Nous Research · Open · Large(406B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 43.0 t/s · TTFT 2.42s · 128k ctx` · 가성비 7.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.4 | -0.78 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 47.4 | -0.17 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.7 | -0.75 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 37.2 | -0.85 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
