---
type: Model
title: Gemini 2.5 Flash (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.331
output_speed_tps: 185.47644206783798
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.8, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.2, z: -0.16, r: 47.7, estimated: false }  # 멀티모달
  long_context: { s: 56.3, z: 0.09, r: 51.3, estimated: false }  # 긴문맥
  instruction: { s: 37.7, z: -0.67, r: 40.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 2.5 Flash (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 185.47644206783798 t/s · TTFT 0.6031287497695695s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 68.2828282828283%×0.4, [[humanitys-last-exam]] 4.72659870250232%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 68.2828282828283%×1.0, [[humanitys-last-exam]] 4.72659870250232%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 12.1212121212121%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[tau2-bench]] 14.9122807017544%×1.0, [[terminal-bench]] 12.1212121212121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.7 | -0.16 | 실측 | [[mmmu-pro]] 65.4913294797688%×1.0 |
| 긴문맥 | 51.3 | +0.09 | 실측 | [[aa-lcr]] 49.9%×1.0 |
| 지시 따르기 | 40.0 | -0.67 | 실측 | [[ifbench]] 38.9795918367347%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
