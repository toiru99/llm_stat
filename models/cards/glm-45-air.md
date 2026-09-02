---
type: Model
title: GLM-4.5-Air
creator: Z AI
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.251
output_speed_tps: 68.0
context_window: 128000
status: past
size_class: Medium
params_b: 106
is_reasoning: true
radar:
  knowledge: { s: 33.3, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.32, r: 45.3, estimated: false }  # 추론
  coding: { s: 43.4, z: -0.14, r: 47.9, estimated: false }  # 코딩
  agentic: { s: 38.4, z: 0.05, r: 50.7, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.4, z: 0.17, r: 52.6, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.68, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5-Air
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# GLM-4.5-Air

Z AI · Open · Medium(106B) · 컨텍스트 128k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.17 · 출력 $0.98 · 혼합 $0.251/1M · 68.0 t/s · TTFT 2.38s · 128k ctx` · 가성비 67.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.3 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 47.9 | -0.14 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 50.7 | +0.05 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.6 | +0.17 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 39.9 | -0.68 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
