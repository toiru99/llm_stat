---
type: Model
title: Gemini 3.5 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 168.360968456471
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.8, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 63.0, z: 1.38, r: 70.7, estimated: false }  # 추론
  coding: { s: 72.2, z: 1.05, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 0.91, r: 63.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 1.11, r: 66.6, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.76, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 90.2, z: 1.65, r: 74.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.5 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 168.360968456471 t/s · TTFT 11.8231578445s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 92.2222%×0.4, [[humanitys-last-exam]] 42.6784%×0.3 |
| 추론 | 70.7 | +1.38 | 실측 | [[critpt]] 13.1429%×1.0, [[gpqa-diamond]] 92.2222%×1.0, [[humanitys-last-exam]] 42.6784%×1.0 |
| 코딩 | 65.8 | +1.05 | 실측 | [[scicode]] 53.9352%×1.0, [[terminal-bench]] 40.9091%×0.5 |
| 에이전트 | 63.7 | +0.91 | 실측 | [[gdpval]] 1210.95 Elo×1.0, [[tau2-bench]] 95.3216%×1.0, [[tau3-banking]] 32.1649%×1.0, [[terminal-bench]] 40.9091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.6 | +1.11 | 실측 | [[mmmu-pro]] 84.2775%×1.0 |
| 긴문맥 | 61.5 | +0.76 | 실측 | [[aa-lcr]] 73.3333%×1.0 |
| 지시 따르기 | 74.8 | +1.65 | 실측 | [[ifbench]] 76.3265%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
