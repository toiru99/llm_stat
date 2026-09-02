---
type: Model
title: Qwen3 VL 8B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.232
output_speed_tps: 117.0
context_window: 256000
status: past
size_class: Small
params_b: 8.77
is_reasoning: false
radar:
  knowledge: { s: 27.3, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 14.1, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 19.3, z: -1.16, r: 32.6, estimated: false }  # 코딩
  agentic: { s: 16.2, z: -0.82, r: 37.7, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 45.7, z: -1.24, r: 31.4, estimated: false }  # 멀티모달
  long_context: { s: 20.5, z: -0.9, r: 36.5, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3 VL 8B

Alibaba · Open · Small(8.77B) · 컨텍스트 256k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.18 · 출력 $0.7 · 혼합 $0.232/1M · 117.0 t/s · TTFT 2.2s · 256k ctx` · 가성비 34.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 32.6 | -1.16 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 37.7 | -0.82 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 31.4 | -1.24 | 실측 | [[mmmu-pro]] 47.0%×1.0 |
| 긴문맥 | 36.5 | -0.9 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
