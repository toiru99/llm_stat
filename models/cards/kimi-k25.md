---
type: Model
title: Kimi K2.5
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.49
output_speed_tps: 41.6020204370319
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.0, z: 1.04, r: 65.7, estimated: false }  # 전문 지식
  reasoning: { s: 46.5, z: 0.54, r: 58.1, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.43, r: 56.5, estimated: false }  # 코딩
  agentic: { s: 58.0, z: 0.45, r: 56.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.2, z: 0.5, r: 57.5, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 81.6, z: 1.16, r: 67.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Kimi K2.5

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.49/1M · 41.6020204370319 t/s · TTFT 2.79812994468333s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.7 | +1.04 | 실측 | [[gpqa-diamond]] 87.8787878787879%×0.4, [[humanitys-last-exam]] 30.722891566265098%×0.3 |
| 추론 | 58.1 | +0.54 | 실측 | [[critpt]] 3.14285714285714%×1.0, [[gpqa-diamond]] 87.8787878787879%×1.0, [[humanitys-last-exam]] 30.722891566265098%×1.0 |
| 코딩 | 56.5 | +0.43 | 실측 | [[terminal-bench]] 34.8484848484849%×0.5 |
| 에이전트 | 56.8 | +0.45 | 실측 | [[gdpval]] 846.64%×1.0, [[tau2-bench]] 95.906432748538%×1.0, [[tau3-banking]] 14.2268041237113%×1.0, [[terminal-bench]] 34.8484848484849%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.5 | +0.5 | 실측 | [[mmmu-pro]] 75.3757225433526%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 실측 | [[ifbench]] 70.2040816326531%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
