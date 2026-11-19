---
type: Model
title: MiMo-V2-Pro
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.2, z: 1.01, r: 65.1, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.39, r: 55.8, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.18, r: 67.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.7, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 79.7, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# MiMo-V2-Pro

Xiaomi · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.1 | +1.01 | 실측 | [[gpqa-diamond]] 86.969696969697%×0.4, [[humanitys-last-exam]] 30.4448563484708%×0.3 |
| 추론 | 55.8 | +0.39 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 86.969696969697%×1.0, [[humanitys-last-exam]] 30.4448563484708%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[terminal-bench]] 40.9090909090909%×0.5 |
| 에이전트 | 67.7 | +1.18 | 실측 | [[tau2-bench]] 95.0292397660819%×1.0, [[terminal-bench]] 40.9090909090909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.4 | +0.7 | 실측 | [[aa-lcr]] 68.3333333333333%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 68.84353741496601%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
