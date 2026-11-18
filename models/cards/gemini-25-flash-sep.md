---
type: Model
title: Gemini 2.5 Flash (Sep)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.4, z: 0.29, r: 54.4, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.13, r: 48.0, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.5, r: 42.5, estimated: false }  # 코딩
  agentic: { s: 35.7, z: -0.32, r: 45.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.2, z: 0.35, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 80.1, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 56.4, z: 0.11, r: 51.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Gemini 2.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.29 | 실측 | [[gpqa-diamond]] 79.2929292929293%×0.4, [[humanitys-last-exam]] 13.8090824837813%×0.3 |
| 추론 | 48.0 | -0.13 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 79.2929292929293%×1.0, [[humanitys-last-exam]] 13.8090824837813%×1.0 |
| 코딩 | 42.5 | -0.5 | 실측 | [[terminal-bench]] 16.6666666666667%×0.5 |
| 에이전트 | 45.2 | -0.32 | 실측 | [[tau2-bench]] 45.6140350877193%×1.0, [[terminal-bench]] 16.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.2 | +0.35 | 실측 | [[mmmu-pro]] 73.121387283237%×1.0 |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 51.6 | +0.11 | 실측 | [[ifbench]] 52.312925170068006%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
