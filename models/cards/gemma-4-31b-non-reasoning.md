---
type: Model
title: Gemma 4 31B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.168
output_speed_tps: 81.0
context_window: 256000
status: current
size_class: Small
params_b: 30.7
is_reasoning: false
radar:
  knowledge: { s: 37.2, z: -0.17, r: 47.4, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 36.7, z: -0.0, r: 49.9, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.36, r: 44.6, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.6, estimated: false }  # 멀티모달
  long_context: { s: 51.8, z: 0.08, r: 51.1, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.23, r: 53.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Gemma 4 31B (Non-reasoning)

Google · Open · Small(30.7B) · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.4 · 혼합 $0.168/1M · 81.0 t/s · TTFT 1.37s · 256k ctx` · 가성비 131.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.4 | -0.17 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 49.9 | +-0.0 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 55.6 | +0.37 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 51.1 | +0.08 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 53.4 | +0.23 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
