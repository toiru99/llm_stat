---
type: Model
title: Gemini 3.8 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 30.8468119957291
price_blended_usd_1m: 0.5775
output_speed_tps: 104.011132277774
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 1.76, r: 76.4, estimated: false }  # 전문 지식
  reasoning: { s: 71.3, z: 1.76, r: 76.4, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.41, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 84.4, z: 1.37, r: 70.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 1.2, r: 67.9, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemini 3.8 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.8468119957291** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 104.011132277774 t/s · TTFT 23.0225839895778s · 1M ctx` · 가성비 53.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.4 | +1.76 | 실측 | [[gpqa-diamond]] 95.2525252525253%×0.4, [[humanitys-last-exam]] 47.8220574606117%×0.3 |
| 추론 | 76.4 | +1.76 | 실측 | [[critpt]] 18.2857142857143%×1.0, [[gpqa-diamond]] 95.2525252525253%×1.0, [[humanitys-last-exam]] 47.8220574606117%×1.0 |
| 코딩 | 71.2 | +1.41 | 실측 | [[scicode]] 56.5972222222222%×1.0 |
| 에이전트 | 70.5 | +1.37 | 실측 | [[gdpval]] 1442.03%×1.0, [[tau3-banking]] 44.948453608247405%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.9 | +1.2 | 실측 | [[mmmu-pro]] 85.606936416185%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 81.3333333333333%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
