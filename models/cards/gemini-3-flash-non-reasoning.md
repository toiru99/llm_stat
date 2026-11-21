---
type: Model
title: Gemini 3 Flash (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 151.485341998206
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.3, z: 0.39, r: 55.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.2, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 46.0, z: 0.04, r: 50.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 62.4, z: 0.26, r: 53.9, estimated: false }  # 긴문맥
  instruction: { s: 60.4, z: 0.27, r: 54.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Gemini 3 Flash (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 151.485341998206 t/s · TTFT 1.45570983287221s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.39 | 실측 | [[gpqa-diamond]] 81.2121212121212%×0.4, [[humanitys-last-exam]] 14.967562557924%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 81.2121212121212%×1.0, [[humanitys-last-exam]] 14.967562557924%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 31.818181818181802%×0.5 |
| 에이전트 | 50.5 | +0.04 | 실측 | [[tau2-bench]] 43.2748538011696%×1.0, [[terminal-bench]] 31.818181818181802%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549132947977%×1.0 |
| 긴문맥 | 53.9 | +0.26 | 실측 | [[aa-lcr]] 55.3333333333333%×1.0 |
| 지시 따르기 | 54.1 | +0.27 | 실측 | [[ifbench]] 55.1020408163265%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
