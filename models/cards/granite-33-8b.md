---
type: Model
title: Granite 3.3 8B
creator: IBM
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.052
output_speed_tps: 15.0
context_window: 128000
status: past
size_class: Small
params_b: 8.17
is_reasoning: false
radar:
  knowledge: { s: 16.3, z: -1.2, r: 32.1, estimated: false }  # 전문 지식
  reasoning: { s: 11.1, z: -1.17, r: 32.5, estimated: false }  # 추론
  coding: { s: 10.8, z: -1.52, r: 27.1, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.24, r: 31.4, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.07, r: 34.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.6, z: -1.42, r: 28.7, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.62, r: 25.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 3.3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Granite 3.3 8B

IBM · Open · Small(8.17B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.03 · 출력 $0.25 · 혼합 $0.052/1M · 15.0 t/s · TTFT 27.21s · 128k ctx` · 가성비 19.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.1 | -1.2 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.5 | -1.17 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 27.1 | -1.52 | 실측 | [[scicode]] 10.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.4 | -1.24 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.0 | -1.07 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.7 | -1.42 | 실측 | [[aa-lcr]] 3.0%×1.0 |
| 지시 따르기 | 25.6 | -1.62 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
