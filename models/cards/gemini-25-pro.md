---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 121.330564338595
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.9, z: 0.73, r: 61.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.9, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 56.6, z: 0.52, r: 57.9, estimated: false }  # 코딩
  agentic: { s: 37.9, z: -0.33, r: 45.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.6, z: 0.47, r: 57.0, estimated: false }  # 멀티모달
  long_context: { s: 77.8, z: 0.62, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 51.4, z: 0.04, r: 50.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 121.330564338595 t/s · TTFT 13.4459826053583s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.0 | +0.73 | 실측 | [[gpqa-diamond]] 84.4444%×0.4, [[humanitys-last-exam]] 22.5209%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 2.57143%×1.0, [[gpqa-diamond]] 84.4444%×1.0, [[humanitys-last-exam]] 22.5209%×1.0 |
| 코딩 | 57.9 | +0.52 | 실측 | [[scicode]] 46.2963%×1.0, [[terminal-bench]] 26.5152%×0.5 |
| 에이전트 | 45.1 | -0.33 | 실측 | [[gdpval]] 462.75 Elo×1.0, [[tau2-bench]] 54.0936%×1.0, [[tau3-banking]] 9.69072%×1.0, [[terminal-bench]] 26.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.0 | +0.47 | 실측 | [[mmmu-pro]] 74.9133%×1.0 |
| 긴문맥 | 59.2 | +0.62 | 실측 | [[aa-lcr]] 69%×1.0 |
| 지시 따르기 | 50.6 | +0.04 | 실측 | [[ifbench]] 48.7075%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
