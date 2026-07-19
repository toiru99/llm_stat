---
type: Model
title: MiniMax-M2.1
creator: MiniMax
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.39
output_speed_tps: 84.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 46.2, z: 0.27, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 60.2, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 1.11, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 37.6, z: 0.47, r: 57.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# MiniMax-M2.1

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 84.0 t/s · TTFT 1.67s · 205k ctx` · 가성비 79.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.27 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 66.7 | +1.11 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 57.0 | +0.47 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
