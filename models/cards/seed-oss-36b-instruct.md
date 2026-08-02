---
type: Model
title: Seed-OSS-36B-Instruct
creator: ByteDance Seed
license: Open
intelligence_index: 18.0
price_blended_usd_1m: None
output_speed_tps: 35.0
context_window: 512000
status: past
size_class: Small
params_b: 36.2
is_reasoning: true
radar:
  knowledge: { s: 37.0, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 43.5, z: -0.15, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.25, r: 46.3, estimated: false }  # 에이전트
  trust: { s: 18.4, z: -0.46, r: 43.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Seed-OSS-36B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Seed-OSS-36B-Instruct

ByteDance Seed · Open · Small(36.2B) · 컨텍스트 512k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.21 · 출력 $0.57 · 혼합 $None/1M · 35.0 t/s · TTFT 2.99s · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 47.8 | -0.15 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 46.3 | -0.25 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 43.1 | -0.46 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
