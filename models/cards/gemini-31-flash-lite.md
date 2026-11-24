---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 6.15684082814488
price_blended_usd_1m: 0.2175
output_speed_tps: 336.597140143602
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.3, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 52.3, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 31.0, z: -0.57, r: 41.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.4, z: 0.51, r: 57.7, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 91.4, z: 1.7, r: 75.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.15684082814488** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.2175/1M · 336.597140143602 t/s · TTFT 8.01484787194172s · 1M ctx` · 가성비 28.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[gpqa-diamond]] 82.2222%×0.4, [[humanitys-last-exam]] 17.1918%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 82.2222%×1.0, [[humanitys-last-exam]] 17.1918%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 43.4028%×1.0, [[terminal-bench]] 24.2424%×0.5 |
| 에이전트 | 41.5 | -0.57 | 실측 | [[gdpval]] 437.67 Elo×1.0, [[tau2-bench]] 31.2865%×1.0, [[tau3-banking]] 9.69072%×1.0, [[terminal-bench]] 24.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.7 | +0.51 | 실측 | [[mmmu-pro]] 75.5491%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 74.3333%×1.0 |
| 지시 따르기 | 75.5 | +1.7 | 실측 | [[ifbench]] 77.2109%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
