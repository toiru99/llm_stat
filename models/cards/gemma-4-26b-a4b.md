---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: 26.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: false
radar:
  knowledge: { s: 41.8, z: 0.03, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 51.5, z: 0.19, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 32.9, z: -0.13, r: 48.0, estimated: false }  # 에이전트
  trust: { s: 20.7, z: -0.35, r: 44.7, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.27, r: 54.1, estimated: false }  # 멀티모달
  long_context: { s: 73.7, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.3, r: 69.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.03 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 52.9 | +0.19 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 48.0 | -0.13 | 실측 | [[gdpval]] 14.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 44.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 54.1 | +0.27 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
