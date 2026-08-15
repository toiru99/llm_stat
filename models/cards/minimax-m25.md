---
type: Model
title: MiniMax-M2.5
creator: MiniMax
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.201
output_speed_tps: 105.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 50.3, z: 0.43, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 42.8, z: 0.37, r: 55.5, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.71, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.49, r: 72.4, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.68, r: 39.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# MiniMax-M2.5

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.201/1M · 105.0 t/s · TTFT 1.59s · 205k ctx` · 가성비 169.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.43 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 55.5 | +0.37 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 60.6 | +0.71 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 72.4 | +1.49 | 실측 | [[tau2-bench]] 95.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
