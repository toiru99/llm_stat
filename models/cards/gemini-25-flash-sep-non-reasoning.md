---
type: Model
title: Gemini 2.5 Flash (Sep) (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.5, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.22, r: 46.8, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.49, r: 42.7, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 76.4, z: 0.31, r: 54.6, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.56, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Sep) (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemini 2.5 Flash (Sep) (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.8 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 42.7 | -0.49 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 54.6 | +0.31 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 58.5 | +0.56 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
