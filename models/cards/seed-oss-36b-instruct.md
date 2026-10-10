---
type: Model
title: Seed-OSS-36B-Instruct
creator: ByteDance Seed
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.246
output_speed_tps: 40.0
context_window: 512000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.7, z: -0.32, r: 45.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.4, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.9, r: 36.6, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.34, r: 44.8, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.67, r: 40.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.5, r: 57.5, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.51, r: 42.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Seed-OSS-36B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Seed-OSS-36B-Instruct

ByteDance Seed · Open · Small · 컨텍스트 512k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.21 · 출력 $0.57 · 혼합 $0.246/1M · 40.0 t/s · TTFT 2.85s · 512k ctx` · 가성비 48.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.2 | -0.32 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 36.6 | -0.9 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 44.8 | -0.34 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 40.0 | -0.67 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.5 | +0.5 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 42.4 | -0.51 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
