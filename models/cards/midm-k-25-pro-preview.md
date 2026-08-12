---
type: Model
title: Mi:dm K 2.5 Pro Preview
creator: Korea Telecom
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.8, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.5, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 34.8, z: -0.52, r: 42.2, estimated: false }  # 코딩
  agentic: { s: 27.0, z: -0.36, r: 44.7, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.04, r: 34.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.7, z: -1.03, r: 34.6, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.24, r: 46.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mi:dm K 2.5 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Mi:dm K 2.5 Pro Preview

Korea Telecom · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.0 | -0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 42.2 | -0.52 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 44.7 | -0.36 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 34.4 | -1.04 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.6 | -1.03 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 46.4 | -0.24 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
