---
type: Model
title: Muse Spark 1.3 (max)
creator: Meta
license: Proprietary
intelligence_index: 36.6172039139368
price_blended_usd_1m: 0.78
output_speed_tps: 110.156677945176
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 1.77, r: 76.6, estimated: false }  # 전문 지식
  reasoning: { s: 77.2, z: 2.09, r: 81.3, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 95.1, z: 1.69, r: 75.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Muse Spark 1.3 (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.6172039139368** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 110.156677945176 t/s · TTFT 23.7398746352834s · 1M ctx` · 가성비 46.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.6 | +1.77 | 실측 | [[gpqa-diamond]] 93.5354%×0.4, [[humanitys-last-exam]] 48.7025%×0.3 |
| 추론 | 81.3 | +2.09 | 실측 | [[critpt]] 24.8571%×1.0, [[gpqa-diamond]] 93.5354%×1.0, [[humanitys-last-exam]] 48.7025%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 58.7963%×1.0 |
| 에이전트 | 75.4 | +1.69 | 실측 | [[gdpval]] 1680.99 Elo×1.0, [[tau3-banking]] 50.5155%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
