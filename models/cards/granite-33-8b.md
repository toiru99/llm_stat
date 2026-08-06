---
type: Model
title: Granite 3.3 8B
creator: IBM
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.052
output_speed_tps: 15.0
context_window: 128000
status: past
size_class: Small
params_b: 8.17
is_reasoning: false
radar:
  knowledge: { s: 15.6, z: -1.22, r: 31.8, estimated: false }  # 전문 지식
  reasoning: { s: 11.4, z: -1.16, r: 32.6, estimated: false }  # 추론
  coding: { s: 11.1, z: -1.5, r: 27.5, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.21, r: 31.9, estimated: false }  # 에이전트
  trust: { s: 6.9, z: -1.0, r: 35.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.3, z: -1.32, r: 30.2, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.62, r: 25.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 3.3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Granite 3.3 8B

IBM · Open · Small(8.17B) · 컨텍스트 128k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.03 · 출력 $0.25 · 혼합 $0.052/1M · 15.0 t/s · TTFT 26.92s · 128k ctx` · 가성비 38.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.8 | -1.22 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.6 | -1.16 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 27.5 | -1.5 | 실측 | [[scicode]] 10.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.9 | -1.21 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 35.0 | -1.0 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.2 | -1.32 | 실측 | [[aa-lcr]] 4.0%×1.0 |
| 지시 따르기 | 25.7 | -1.62 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
