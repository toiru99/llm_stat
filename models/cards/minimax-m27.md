---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.222
output_speed_tps: 51.9641429999814
context_window: 204800
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 68.0, z: 1.03, r: 65.5, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.41, r: 56.2, estimated: false }  # 추론
  coding: { s: 67.3, z: 0.88, r: 63.3, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 89.3, z: 1.62, r: 74.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Large(230B) · 컨텍스트 204k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 51.9641429999814 t/s · TTFT 4.12612167193887s · 204k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.5 | +1.03 | 실측 | [[gpqa-diamond]] 87.3737%×0.4, [[humanitys-last-exam]] 29.6108%×0.3 |
| 추론 | 56.2 | +0.41 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 87.3737%×1.0, [[humanitys-last-exam]] 29.6108%×1.0 |
| 코딩 | 63.3 | +0.88 | 실측 | [[scicode]] 50.1157%×1.0, [[terminal-bench]] 39.3939%×0.5 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[gdpval]] 1015.57 Elo×1.0, [[tau2-bench]] 84.7953%×1.0, [[tau3-banking]] 9.89691%×1.0, [[terminal-bench]] 39.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | 74.2 | +1.62 | 실측 | [[ifbench]] 75.7143%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
