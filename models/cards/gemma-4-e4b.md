---
type: Model
title: Gemma 4 E4B
creator: Google
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: 92.0
context_window: 128000
status: current
size_class: Small
params_b: 8
is_reasoning: true
radar:
  knowledge: { s: 20.6, z: -0.97, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 30.7, z: -0.68, r: 39.9, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.94, r: 35.9, estimated: false }  # 에이전트
  trust: { s: 78.2, z: 2.36, r: 85.3, estimated: false }  # 신뢰성
  multimodal: { s: 51.4, z: -0.97, r: 35.5, estimated: false }  # 멀티모달
  long_context: { s: 40.8, z: -0.26, r: 46.2, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.51, r: 42.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Gemma 4 E4B

Google · Open · Small(8B) · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $None/1M · 92.0 t/s · TTFT 0.83s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.9 | -0.68 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 35.9 | -0.94 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 21.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 85.3 | +2.36 | 실측 | [[aa-omniscience]] 69.0%×1.0 |
| 멀티모달 | 35.5 | -0.97 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 46.2 | -0.26 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 42.4 | -0.51 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
