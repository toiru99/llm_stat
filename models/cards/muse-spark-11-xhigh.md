---
type: Model
title: Muse Spark 1.1 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.78
output_speed_tps: 198.987803201604
context_window: 1048576
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 65.5, z: 1.51, r: 72.6, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 66.5, z: 0.68, r: 60.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 0.92, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Muse Spark 1.1 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 198.987803201604 t/s · TTFT 11.5772997978972s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[gpqa-diamond]] 89.798%×0.4, [[humanitys-last-exam]] 46.2002%×0.3 |
| 추론 | 72.6 | +1.51 | 실측 | [[critpt]] 15.1429%×1.0, [[gpqa-diamond]] 89.798%×1.0, [[humanitys-last-exam]] 46.2002%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 58.7963%×1.0 |
| 에이전트 | 60.3 | +0.68 | 실측 | [[gdpval]] 1215.43 Elo×1.0, [[tau3-banking]] 31.7526%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.7 | +0.92 | 실측 | [[aa-lcr]] 77.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
