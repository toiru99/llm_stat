---
type: Model
title: MiniMax-M2
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.39
output_speed_tps: 98.0510969439494
context_window: 204800
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 39.1, z: -0.07, r: 49.0, estimated: false }  # 코딩
  agentic: { s: 63.3, z: 0.57, r: 58.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.6, z: 0.45, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.42, r: 71.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# MiniMax-M2

MiniMax · Open · Large(230B) · 컨텍스트 204k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 98.0510969439494 t/s · TTFT 1.56519590212498s · 204k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[gpqa-diamond]] 77.6768%×0.4, [[humanitys-last-exam]] 13.6701%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 77.6768%×1.0, [[humanitys-last-exam]] 13.6701%×1.0 |
| 코딩 | 49.0 | -0.07 | 실측 | [[terminal-bench]] 25.7576%×0.5 |
| 에이전트 | 58.6 | +0.57 | 실측 | [[tau2-bench]] 86.8421%×1.0, [[terminal-bench]] 25.7576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.8 | +0.45 | 실측 | [[aa-lcr]] 64.3333%×1.0 |
| 지시 따르기 | 71.3 | +1.42 | 실측 | [[ifbench]] 72.3129%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
