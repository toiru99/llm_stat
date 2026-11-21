---
type: Model
title: Gemini 3.5 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 153.457700030478
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.8, z: 1.52, r: 72.8, estimated: false }  # 전문 지식
  reasoning: { s: 63.0, z: 1.35, r: 70.3, estimated: false }  # 추론
  coding: { s: 72.2, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 0.97, r: 64.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 1.11, r: 66.6, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 90.2, z: 1.52, r: 72.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Gemini 3.5 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 153.457700030478 t/s · TTFT 12.11511682535s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.8 | +1.52 | 실측 | [[gpqa-diamond]] 92.2222222222222%×0.4, [[humanitys-last-exam]] 42.678405931418%×0.3 |
| 추론 | 70.3 | +1.35 | 실측 | [[critpt]] 13.1428571428571%×1.0, [[gpqa-diamond]] 92.2222222222222%×1.0, [[humanitys-last-exam]] 42.678405931418%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 53.9351851851852%×1.0, [[terminal-bench]] 40.9090909090909%×0.5 |
| 에이전트 | 64.6 | +0.97 | 실측 | [[gdpval]] 1210.95%×1.0, [[tau2-bench]] 95.3216374269006%×1.0, [[tau3-banking]] 32.1649484536082%×1.0, [[terminal-bench]] 40.9090909090909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.6 | +1.11 | 실측 | [[mmmu-pro]] 84.2774566473988%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 73.3333333333333%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 실측 | [[ifbench]] 76.32653061224491%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
