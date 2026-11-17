---
type: Model
title: Llama 3 8B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.055
output_speed_tps: 70.13407812223565
context_window: 8192
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.4, z: -1.53, r: 27.0, estimated: false }  # 전문 지식
  reasoning: { s: 9.5, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.35, r: 29.7, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.55, r: 26.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 17.5, z: -1.51, r: 27.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Llama 3 8B

Meta · Open · Small · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.045 · 출력 $0.145 · 혼합 $0.055/1M · 70.13407812223565 t/s · TTFT 0.5031005945624685s · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.0 | -1.53 | 실측 | [[gpqa-diamond]] 29.5959595959596%×0.4, [[humanitys-last-exam]] 5.06%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.5959595959596%×1.0, [[humanitys-last-exam]] 5.06%×1.0 |
| 코딩 | 29.7 | -1.35 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 26.8 | -1.55 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.3 | -1.51 | 실측 | [[ifbench]] 24.557823129251698%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
