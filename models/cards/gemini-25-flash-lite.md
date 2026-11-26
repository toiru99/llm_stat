---
type: Model
title: Gemini 2.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 341.804825285362
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.2, z: -0.42, r: 43.8, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 12.7, z: -1.21, r: 31.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.3, z: -0.67, r: 40.0, estimated: false }  # 멀티모달
  long_context: { s: 62.8, z: 0.16, r: 52.3, estimated: false }  # 긴문맥
  instruction: { s: 53.0, z: 0.11, r: 51.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 2.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 341.804825285362 t/s · TTFT 16.3762578428472s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.8 | -0.42 | 실측 | [[gpqa-diamond]] 62.5253%×0.4, [[humanitys-last-exam]] 6.81186%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 62.5253%×1.0, [[humanitys-last-exam]] 6.81186%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 31.8 | -1.21 | 실측 | [[tau2-bench]] 18.4211%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.0 | -0.67 | 실측 | [[mmmu-pro]] 58.2081%×1.0 |
| 긴문맥 | 52.3 | +0.16 | 실측 | [[aa-lcr]] 55.6667%×1.0 |
| 지시 따르기 | 51.6 | +0.11 | 실측 | [[ifbench]] 49.8639%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
