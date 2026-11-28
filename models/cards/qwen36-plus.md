---
type: Model
title: Qwen3.6 Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 49.9521992039902
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.5, z: 1.01, r: 65.1, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.49, r: 57.4, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.86, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 66.8, z: 0.69, r: 60.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.68, r: 60.2, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 88.5, z: 1.58, r: 73.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3.6 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 49.9521992039902 t/s · TTFT 2.35706358936118s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.1 | +1.01 | 실측 | [[gpqa-diamond]] 88.1818%×0.4, [[humanitys-last-exam]] 27.8499%×0.3 |
| 추론 | 57.4 | +0.49 | 실측 | [[critpt]] 2.85714%×1.0, [[gpqa-diamond]] 88.1818%×1.0, [[humanitys-last-exam]] 27.8499%×1.0 |
| 코딩 | 63.0 | +0.86 | 실측 | [[terminal-bench]] 43.9394%×0.5 |
| 에이전트 | 60.4 | +0.69 | 실측 | [[gdpval]] 996.67 Elo×1.0, [[tau2-bench]] 97.6608%×1.0, [[tau3-banking]] 20.8247%×1.0, [[terminal-bench]] 43.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.2 | +0.68 | 실측 | [[mmmu-pro]] 77.9769%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | 73.8 | +1.58 | 실측 | [[ifbench]] 75.1701%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
