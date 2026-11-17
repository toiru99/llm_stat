---
type: Model
title: Gemini 3.8 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 22.548302237854
price_blended_usd_1m: 0.5775
output_speed_tps: 105.69157278669239
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.4, z: 1.37, r: 70.5, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.82, r: 62.2, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 70.1, z: 0.88, r: 63.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.7, z: 1.15, r: 67.2, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 82.2, z: 1.19, r: 67.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 3.8 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **22.548302237854** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 105.69157278669239 t/s · TTFT 4.37447646636354s · 1M ctx` · 가성비 39.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.5 | +1.37 | 실측 | [[gpqa-diamond]] 92.020202020202%×0.4, [[humanitys-last-exam]] 37.0713623725672%×0.3 |
| 추론 | 62.2 | +0.82 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 92.020202020202%×1.0, [[humanitys-last-exam]] 37.0713623725672%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 54.976851851851805%×1.0 |
| 에이전트 | 63.3 | +0.88 | 실측 | [[gdpval]] 1314.93%×1.0, [[tau3-banking]] 33.1958762886598%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.2 | +1.15 | 실측 | [[mmmu-pro]] 84.5086705202312%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 67.9 | +1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
