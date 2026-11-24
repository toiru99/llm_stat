---
type: Model
title: Gemini 3.8 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 30.078569475636
price_blended_usd_1m: 0.5775
output_speed_tps: 100.723969279551
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.58, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 62.4, z: 1.36, r: 70.3, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.34, r: 70.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.0, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.8 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.078569475636** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 100.723969279551 t/s · TTFT 12.0203220109555s · 1M ctx` · 가성비 52.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.58 | 실측 | [[gpqa-diamond]] 93.5354%×0.4, [[humanitys-last-exam]] 42.1223%×0.3 |
| 추론 | 70.3 | +1.36 | 실측 | [[critpt]] 12.2857%×1.0, [[gpqa-diamond]] 93.5354%×1.0, [[humanitys-last-exam]] 42.1223%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 55.0926%×1.0 |
| 에이전트 | 70.0 | +1.34 | 실측 | [[gdpval]] 1432.3 Elo×1.0, [[tau3-banking]] 45.7732%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 84.2197%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 84%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
