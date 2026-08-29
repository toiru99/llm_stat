---
type: Model
title: Gemma 4 26B A4B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.1535
output_speed_tps: 74.0
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: false
radar:
  knowledge: { s: 33.7, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 53.7, z: 0.26, r: 53.9, estimated: false }  # 코딩
  agentic: { s: 39.1, z: 0.09, r: 51.4, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: 0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.25, r: 46.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Gemma 4 26B A4B (Non-reasoning)

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.1535/1M · 74.0 t/s · TTFT 1.23s · 256k ctx` · 가성비 130.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 53.9 | +0.26 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 51.4 | +0.09 | 실측 | [[tau2-bench]] 40.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 50.0 | +0.0 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
